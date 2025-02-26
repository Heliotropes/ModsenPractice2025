async function fetchAndProcessData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error ${response.status}: ${errorText || response.statusText}`);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error("Error fetching/processing:", error);
      return `Error: ${error.message}`; 
    }
  }