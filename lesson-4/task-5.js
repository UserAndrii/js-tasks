function printContactsInfo(names, phones) {
    const name = names.split(',');
    const phone = phones.split(',');

    for (let i = 0; i < name.length; i++) {
        console.log(`${name[i]} : ${phone[i]}`)
    }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);