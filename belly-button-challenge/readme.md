
# Homework 14

## Belly Button Biodiversity

### Description

The **Belly Button Biodiversity Dashboard** is a web application that allows users to visualize data from the Belly Button Biodiversity study. This dataset catalogs microbial species—known as Operational Taxonomic Units (OTUs)—found in human navels, offering fascinating insights into microbial diversity.

Users can explore data samples through visualizations like horizontal bar charts, bubble charts, and metadata panels. The dashboard updates charts and metadata in real time based on user selections, creating an intuitive and engaging experience for exploring microbial composition.

### Background

The Belly Button Biodiversity study discovered that while a few microbial species appeared in more than 70% of participants, most species were relatively rare. This dashboard allows users to interactively investigate this unique dataset and uncover patterns in microbial presence.

### Features

* **Metadata Panel** – Displays demographic details for each individual, including age, gender, and location.
* **Horizontal Bar Chart** – Shows the top 10 microbial OTUs present in a selected individual.
* **Bubble Chart** – Visualizes all OTUs in a sample, illustrating relationships between OTU IDs, sample values, and labels.
* **Dynamic Interactivity** – Automatically refreshes all visualizations when users select a new sample from the dropdown menu.

### Files

This project includes the following key files:

* `index.html` – Loads the dashboard’s layout and structure.
* `samples.json` – Contains the dataset used for visualizations (accessed via a static URL).
* `app.js` – Implements the JavaScript logic for building charts and the metadata panel.
* `styles.css` – Provides custom styling for the dashboard.
* `static/` – Stores additional assets such as JavaScript and CSS files.

### Technologies Used

* **HTML & CSS** – For structure and styling.
* **JavaScript** – For interactivity and data handling.
* **D3.js** – To bind data to DOM elements and create visualizations.
* **Plotly.js** – For rendering interactive charts.
* **GitHub Pages** – For hosting and deployment.

### Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone git@github.com:qwewe6/belly-button-challenge.git
   ```
2. Navigate to the project folder:
   ```bash
   cd belly-button-challenge
   ```
3. Open `index.html` in your web browser to launch the dashboard.

### Usage

1. Open the dashboard in your browser (locally or via GitHub Pages).
2. Use the dropdown menu to choose an individual sample.
3. View the following:
   * The **metadata panel** for demographic details.
   * The **bar chart** for the top 10 OTUs.
   * The **bubble chart** for all OTUs in the sample.

Explore and compare microbial diversity across individuals with ease.
