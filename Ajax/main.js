const gameUrl = 'https://games-world.herokuapp.com/games';

(async function() {
      const games = await fetch(gameUrl)
      .then(res => res.json())

      displayGames(games);
      attachEventListeners();
})();

function displayGames(games) {
      const fragment = document.createDocumentFragment();

      for(const game of games) {
            const gameHtml = createHtml(game);
            fragment.append(gameHtml);
      }
      document.body.append(fragment);
}

function createHtml(game) {
      const wrapper = document.createElement('section')

      const title = document.createElement('h2');
      title.innerHTML = game.title;

      const img = document.createElement('img');
      img.src = game.imageUrl;

      const description = document.createElement('div');
      description.innerHTML = game.description;

      const editBtn = document.createElement('button');
      editBtn.innerHTML = 'Edit Game';
      editBtn.classList.add('js-edit-button');
      editBtn.setAttribute('data-game-id', game._id);

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = 'Delete Game';
      deleteBtn.classList.add('js-delete-button');
      deleteBtn.setAttribute('data-game-id', game._id);

      wrapper.append(title, img, description, editBtn, deleteBtn);

      return wrapper
}

function attachEventListeners() {
      
      document.addEventListener('click', handleClick);

      function handleClick(e) {
            const gameId = e.target.setAttribute('data-game-id', '_id');

            if(e.target.classList.contains('js-edit-button')) {
                  handleEdit(gameId);
            } else if(e.target.classList.contains('js-delete-button')) {
                  handleDelete(gameId);
            }
      }
}

function handleEdit(id) {
      fetch(`${gameUrl}/${id}`, {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
            },

            body: 'Title=Change Game Name'
      })
      .then(res => res.json())
      .then(console.log);
}

function handleDelete(id) {
      fetch(`${gameUrl}/${id}`, {
            method: 'DELETE'
      })
      .then(res => res.json())
      .then(console.log);
}