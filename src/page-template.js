const generateTeam = (teamArray) => {
  return `
  <div class="container">
    ${teamArray
      .filter(({ role }) => role === 'Manager')
      .map((person) => {
        return `
        <div class="card">
          <div class="card-header">
            <span class="card-name">${person.name}</span>
            <span class="card-role"><i class="fa-solid fa-mug-hot"></i> ${person.role}</span>
          </div>
          <div class="info-container">
          <div class="card-info">
            <span>ID: ${person.id}</span>
            <span>Email: <a href="mailto:${person.email}">${person.email}</a></span>
            <span>Office number: ${person.officeNumber}</span>
          </div>
          </div>
        </div>
        `;
      })}

    ${teamArray
      .filter(({ role }) => role === 'Engineer')
      .map((person) => {
        return `
        <div class="card">
          <div class="card-header">
            <span class="card-name">${person.name}</span>
            <span class="card-role"><i class="fa-solid fa-glasses"></i> ${person.role}</span>
          </div>
          <div class="info-container">
          <div class="card-info">
            <span>ID: ${person.id}</span>
            <span>Email: <a href="mailto:${person.email}">${person.email}</a></span>
            <span>GitHub: <a href="https://github.com/${person.github}">${person.github}</a></span>
          </div>
          </div>
        </div>
        `;
      })
      .join('')}

    ${teamArray
      .filter(({ role }) => role === 'Intern')
      .map((person) => {
        return `
        <div class="card">
          <div class="card-header">
            <span class="card-name">${person.name}</span>
            <span class="card-role"><i class="fa-solid fa-user-graduate"></i> ${person.role}</span>
          </div>
          <div class="info-container">
          <div class="card-info">
            <span>ID: ${person.id}</span>
            <span>Email: <a href="mailto:${person.email}">${person.email}</a></span>
            <span>School: ${person.school}</span>
          </div>
          </div>
        </div>
        `;
      })
      .join('')}
  </div>
  `;
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,400&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
  </head>
  <body>
    <header>
      My Team
    </header>
    <main>
    ${generateTeam(team)}
    </main>
  </body>
  </html>
  `;
};
