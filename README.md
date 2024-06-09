# belly-button-challenge

Link to the dashboard: https://annacmane.github.io/belly-button-challenge/

# Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Instructions
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

![image](https://github.com/annacmane/belly-button-challenge/assets/160549966/0fc599d4-b476-4eab-a6ed-5cf50bcd71da)

3. Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

![image](https://github.com/annacmane/belly-button-challenge/assets/160549966/85fd36b2-9a6b-4376-bdc9-8f0490be55d8)

4. Display the sample's metadata, i.e., an individual's demographic information.

Loop through each key-value pair from the metadata JSON object and create a text string.

Append an html tag with that text to the #sample-metadata panel.

![image](https://github.com/annacmane/belly-button-challenge/assets/160549966/f5627ac4-7763-4809-8175-bf351a6b3afd)

5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://github.com/annacmane/belly-button-challenge/assets/160549966/82a59185-a0fb-4a3c-b3d8-f0b77998fa54)

6. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
