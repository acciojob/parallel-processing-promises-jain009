//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


funnction downloadImage(url){
	return new Promise((resolve , reject) () => {
		const img = new Image();
		img.src  = url;

		img.onload = () => resolve(img);
		img.onerror () => reject(`Failed to load image ${url}`);
			
	
	};
	)
}
	 function downloadImage(imageUrls){
		 const outputDiv = document.getElementById("output");
		 const errorDiv = document.getElelmentById("error");
		 const loadingDiv = document.getElementById("loading");

		 loadingDiv.style.display ="block";
		 errorDiv.textContent = "";
		 outputDiv.ineerHTML ="";
		 Promise.all(imageUrls.map(downloadImage))
		 .then(images => {
			 loadingDiv.style.dispaly ="none";
			 images.forEach(img => outputDiv.appendChild(img));
		 })
		 .catch(error => {
			 laodingDiv.style.display ="none";
			 errorDiv.textContent = error;
		 });
	 }


// Call the function to download images
downloadImages(imageUrls);