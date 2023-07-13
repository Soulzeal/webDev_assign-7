function updatePreview() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
  
    document.getElementById("preview-title").textContent = title;
    document.getElementById("preview-description").textContent = description;
  }
  