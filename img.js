const imgGrid = document.getElementById('more_img_list');
let pageToFetch = 1;

async function fetchImages(pageNum) {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=6');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);

        showImages(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function showImages(datas) {
    datas.forEach((item) => {
        const imgElement = document.createElement('img');
        imgElement.src = item.download_url;
        imgElement.alt = '';
        imgGrid.appendChild(imgElement);
    });
}

const showMoreButton = document.querySelector('.more_btn');
showMoreButton.addEventListener('click', () => {
    fetchImages(pageToFetch++);
});