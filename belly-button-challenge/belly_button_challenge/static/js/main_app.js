// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("Data successfully fetched:", data);

    // Get the metadata field and filter for the sample ID provided
    const metadata = data.metadata.filter(obj => obj.id === parseInt(sample))[0];
    console.log("Filtered Metadata for sample ID:", sample, metadata);

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Use `.html("")` to clear any existing metadata
    panel.html("");

    // Inside a loop, append new tags for each key-value pair in the filtered metadata
    if (metadata) {
      Object.entries(metadata).forEach(([key, value]) => {
        panel.append("h6").text(`${key}: ${value}`);
      });
    } else {
      console.error("No metadata found for sample ID:", sample);
    }
  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("Data successfully fetched:", data);

    // Get the samples field and filter for the sample ID provided
    const sampleData = data.samples.filter(obj => obj.id === sample)[0];
    console.log("Filtered Sample Data for sample ID:", sample, sampleData);

    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = sampleData.otu_ids;
    const otu_labels = sampleData.otu_labels;
    const sample_values = sampleData.sample_values;

    // Build a Bubble Chart
    const bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids
      }
    }];
    const bubbleLayout = {
      title: "Bubble Chart",
      xaxis: { title: "OTU IDs" },
      yaxis: { title: "Sample Values" },
      showlegend: false
    };
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // Build a Bar Chart
    const barData = [{
      x: sample_values.slice(0, 10).reverse(),
      y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];
    const barLayout = {
      title: "Top 10 OTUs Found",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU IDs" }
    };
    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("Initializing dashboard...");

    // Get the names field and populate the dropdown menu
    const selector = d3.select("#selDataset");
    data.names.forEach((name) => {
      selector.append("option").text(name).property("value", name);
    });

    // Get the first sample from the list
    const firstSample = data.names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
