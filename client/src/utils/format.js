
export function formatDate(date) {
    const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  
 export function formatDuration(duration) {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  export const truncateAuthor = (author, maxLength) => {
    if (author.length > maxLength) {
      return author.slice(0, maxLength) + "...";
    }
    return author;
  };
  