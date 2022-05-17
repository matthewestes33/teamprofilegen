// function to generate index.html by parsing JSON array
function pageTemplate(data) {
    const convertedData = JSON.parse(data)
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">

                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${convertedData[0].name}</h3>
                            <h4>Manager</h4></i>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${convertedData[0].id}</p>
                            <p class="email">Email: <a href="mailto:${convertedData[0].email}">${convertedData[0].email}</a></p>
                            <p class="office">Office Number: ${convertedData[0].officeNumber}</p>
                        </div>
                    </div>
                </div>

                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${convertedData[1].name}</h3>
                            <h4>Engineer</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${convertedData[1].id}</p>
                            <p class="email">Email: <a href="mailto:${convertedData[1].email}">${convertedData[1].email}</a></p>
                            <p class="github">Github: <a href="https://github.com/${convertedData[1].github}">${convertedData[1].github}</a></p>
                        </div>
                    </div>
                </div>

                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>${convertedData[2].name}</h3>
                            <h4>Intern</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${convertedData[2].id}</p>
                            <p class="email">Email:<a href="mailto:${convertedData[2].email}">${convertedData[2].email}</a></p>
                            <p class="school">School: ${convertedData[2].school}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>     
</body>
</html>
`;
}

// export to index
module.exports = pageTemplate; 