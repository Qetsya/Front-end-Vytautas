//1

let age = 17;

const votingText = age >= 18 ? `U are welcome to vote!` : `U are unable to vote yet!`;

//2
const login = 'director';
const message = login == 'employee'
    ? 'hello'
    : login == 'director'
        ? 'greetings'
        : login == ''
            ? 'no login'
            : '';

console.log(message);

//


function createUser(name, role = 'student') {
    return {
        name: name,
        role: role,

        sayHi() {
            console.log('hi');
        }
    };
}

const jonasUser = createUser('jonas', 'lecturer');
const petrasUser = createUser('petras');

jonasUser.sayHi();
petrasUser.sayHi();




