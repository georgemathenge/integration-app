function formatDate(dateStr) {
    const date = new Date(dateStr);
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const mins = String(date.getMinutes()).padStart(2, '0');
    return `${d}/${m}/${y} ${hours}:${mins}`;
  } 
  

  const formatDate2 = (date) => {
    return new Date(date).toISOString().slice(0, 19); // Removes milliseconds and 'Z'
  };

  module.exports = {formatDate, formatDate2};