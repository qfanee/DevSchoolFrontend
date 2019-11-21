export function read(){
    const contacts = window.localStorage.getItem('ds-contacts');
    return JSON.parse(contacts) || [];
}

export function write(data){
    window.localStorage.setItem('ds-contacts', JSON.stringify(data));
}

export function add(contact){
    const contacts = read();
    contacts.push(contact);
    write(contacts);
}