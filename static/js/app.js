// Since each section uses the same URL, I will use a const variable to store the URL inside
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"
d3.json(url).then(function(data) {
  console.log(data);
});

// Function to run on page load
function init() {
  // Use d3 to select the dropdown with id of `#selDataset`
  let dropdown_menu = d3.select("#selDataset");
  d3.json(url).then((data) => {

    // Get the names field
    let names = data.names;

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach((id) => {
      console.log(id);
      dropdown_menu.append("option").text(id).property("value", id);

    });
    
    // Get the first sample from the list
    let firstSample = names[0];
    console.log(firstSample);

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
};

// function to build both charts
function buildCharts(sample) {
  // d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  d3.json(url).then((data) => {

    // Get the samples field
    let samplesField = data.samples;

    // Filter the samples for the object with the desired sample number
    let sampleInfo = samplesField.filter(result => result.id == sample);
    console.log(sampleInfo);
    let sampleinfo_1 = sampleInfo[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = sampleinfo_1.otu_ids;
    let otu_labels = sampleinfo_1.otu_labels;
    let sample_values = sampleinfo_1.sample_values;
    console.log(otu_ids, otu_labels, sample_values);

    // Build a Bubble Chart
    let bubble1 = {
      x: otu_ids, 
      y: sample_values, 
      text: otu_labels, 
      mode: "markers", 
      marker:{size: sample_values, 
        color: otu_ids, 
        colorscale: "Earth"}
    };

    // Render the Bubble Chart
    let bubblayout = {
      title: "Bacteria Cultures Per Sample", hovermode: "closest", xaxis: {title: "OTU ID"}, yaxis: {title: "Number of Bacteria"}
    };

    Plotly.newPlot("bubble", [bubble1], bubblayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
    let xticks = sample_values.slice(0,10).reverse();
    let labels = otu_labels.slice(0,10).reverse();

    let barchart = {
      x: xticks,
      y: yticks,
      text: labels,
      type: "bar",
      orientation: "h"
    };
   
    // Render the Bar Chart
    let barlayout = {
      title: "Top 10 Bacteria Culteres Found",
      xaxis: {title: "Number of Bacteria"}
    };

    Plotly.newPlot("bar", [barchart], barlayout)
    });
};

// Build the metadata panel
function buildMetadata(sample) {
  // d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  // Use d3 to select the panel with id of `#sample-metadata`
  let panel = d3.select("#sample-metadata");
  
  d3.json(url).then((data) => {

    // get the metadata field
      let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
      let metaValue = metadata.filter(result => result.id == sample);
      console.log(metaValue);
      
      let firstMetaValue = metaValue[0]

    // Use `.html("") to clear any existing metadata
      panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
      Object.entries(firstMetaValue).forEach(([key,value]) => {
        console.log(key,value);
        panel.append("h5").text(`${key}: ${value}`);
    });
  });
};

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  console.log(newSample);
  buildMetadata(newSample);
  buildCharts(newSample);
};

// Initialize the dashboard
init();
