import React from 'react';

const array = [23, 45, 67, 89, 12]
const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
const people = [
    {
        name: 'James',
        age: 31,
    },
    {
        name: 'John',
        age: 45,
    },
    {
        name: 'Paul',
        age: 65,
    },
    {
        name: 'Ringo',
        age: 49,
    },
    {
        name: 'George',
        age: 34,
    }
];

function Data() {
    return (
        <div>
            <h1>Filter function</h1>
            {people.filter(person => person.age < 60).map(filteredPerson => (
                <li>
                    {filteredPerson.name}
                </li>
            ))}

            <ul>
                {array.filter(number => number > 60).map(number =>
                    <li>{number}</li>
                )}
            </ul>

            <li>
                {array.filter(number => number > 40).map(number =>
                    <p>{number}</p>
                )}
            </li>

            <ul>
                {names.filter(name => name.includes('J')).map(namefilter => (

                    <li>{namefilter}</li>
                )
                )}

            </ul>
        </div>
    );
}

export default Data;
