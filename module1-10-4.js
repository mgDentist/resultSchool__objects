const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (student, jobName) => {
    const studentNewInfo = {
        ...student,
        jobname: jobName,
    };

    alert(`Поздравляем! У студента ${studentNewInfo.fullName} появилась новая работа! Теперь он ${studentNewInfo.jobname}`);
    
    return studentNewInfo;
};

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

console.log(updatedStudent);
