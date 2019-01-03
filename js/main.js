// Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);


// Save bookmarks
function saveBookmark(e) {
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    /* Local storage test
    localStorage.setItem('test', 'HEY BRO');
    localStorage.getItem('test');
    localStorage.removeItem('test'); 
    */

    // Test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
        // Init bookmark array
        
    }
    
    // Prevent form from submitting
    e.preventDefault();
};