// Get username from input element 
const inputElement = document.querySelector('#input');
const buttonElement = document.querySelector('#button');

const DATA = [
    { id: 'avatar_url', isImage: true },
    { id: 'name' },
    { id: 'bio' },
    { id: 'twitter_username' },
    { id: 'followers' },
  ];

// Get data from https://api.github.com/users/${username}
const fetchData = async (username) => {
    try {
        let result = await fetch(`https://api.github.com/users/${username}`);
        if (!result.ok) {
            throw new Error('This username is not found');
        }
        return result.json();
    } catch (error) {
        throw error;
    }
};

// Add data to the html page (profile.html)
const fillData = ({ id, data, isImage }) => {
    const element = document.querySelector(`#${id}`);
  
    if (!isImage) {
      element.textContent = data;
    } else {
      element.src = data;
    }
  };
  buttonElement?.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = inputElement.value;
    try {
      const result = await fetchData(username);
  
      DATA.forEach((item) => fillData({ ...item, data: result[item.id] }));
    } catch (err) {
      alert(err);
    }
  });

// When user adds wrong username then show him an alert with "This username is not found"