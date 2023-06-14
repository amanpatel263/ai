function convertToPDF() {
    var fileInput = document.getElementById("imageInput");
    var files = fileInput.files;

    if (files.length > 0) {
        var numImages = files.length;
        var numLoaded = 0;

        function convertImageToPDF(file) {
            return new Promise((resolve, reject) => {
                var reader = new FileReader();

                reader.onload = function(e) {
                    var imgData = e.target.result;
                    var img = new Image();
                    img.src = imgData;

                    img.onload = function() {
                        var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);

                        var imageDataURL = canvas.toDataURL("image/jpeg");

                        resolve(imageDataURL);
                    };
                };

                reader.readAsDataURL(file);
            });
        }

        function convertAllToPDF() {
            var promises = [];

            for (var i = 0; i < files.length; i++) {
                promises.push(convertImageToPDF(files[i]));
            }

            Promise.all(promises)
                .then((imageDataURLs) => {
                    var pdf = new jsPDF();

                    imageDataURLs.forEach((imageDataURL) => {
                        pdf.addImage(imageDataURL, 'JPEG', 10, 10, 190, 0);
                    });

                    pdf.save('images.pdf');
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        convertAllToPDF();
    }
}
