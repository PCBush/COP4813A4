function toggleTopics(subject) {
  const allTopics = document.querySelectorAll('.topics'); // get topics
  allTopics.forEach(t => t.style.display = 'none'); // hide 
  
  const current = document.getElementById(`${subject}-topics`); // get topic
  current.style.display = current.style.display === 'block' ? 'none' : 'block'; // toggle
}