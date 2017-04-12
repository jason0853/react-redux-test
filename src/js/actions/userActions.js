export function changeName(name) {
    return {
        type: 'CHANGE_USER',
        payload: name
    }
}

export function changeJob(job) {
    return {
        type: 'CHANGE_JOB',
        payload: job
    }
}
