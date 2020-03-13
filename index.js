document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const output = document.querySelector('#link-input');
    output.value = `${window.location.href}#${encrypted}`;
    output.select();
})

const {hash} = window.location;
const cleanHash = atob(hash.replace(/#/g, '')); //RegEx to replace all the # occurences

if (cleanHash){
    document.querySelector('#link-form').classList.add('hide');
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('.message').innerHTML = cleanHash;
}

