async function Page(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("nav-content").innerHTML = y;
  }
