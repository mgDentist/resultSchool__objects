const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const handleObject = (obj, key, action) => {
    switch (action) {
        case 'get':
            return obj[key];
            break;
        case 'add':
            obj[key] = '';
            return obj;
            break;
        case 'delete':
            delete obj[key];
            return obj;
            break;
        default:
            return obj;
    };
};

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log(result);
