const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function (input) {
    if (input.value.trim() === '') {
        return input.dataset.empty;
    }
    if (!regEmail.test(input.value)) {
        return input.dataset.wrong;
    }
    return true;
}