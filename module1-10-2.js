const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patients, orders) => {
    const queue = [];

    orders.forEach((order) => {
        patients.find((patient) => {
            if (order === patient.id) {
                queue.push(patient);
            };
        });
    });
    console.log(queue);
};

giveTalonsInOrder(people, ordersArr);
