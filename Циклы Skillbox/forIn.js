const contentEl = document.querySelector('.content');
const comment = ['good', 'bad', 'normal'];

for (const key in comment) {
    if (key == 1) {
        console.log(comment[key]);
    }
}