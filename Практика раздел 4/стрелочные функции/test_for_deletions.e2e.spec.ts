// import {expect} from '@playwright/test';

// import {createYavizTest} from 'lib/test/yaviz-test';
// import {TestDataSource} from 'lib/test/constants';
// import { RidePage } from 'lib/test/models/ride-page';
// import { StopSignLayer } from 'containers/visualization/layers';
// // import { context } from 'msw';
// // import { Browser } from 'leaflet';
// // import { browserName } from 'react-device-detect';
// // import { promiseAllWithFails } from 'lib/helpers';



// const yavizTest = createYavizTest({expectNoMessagesInConsole: false, authenticateAs: 'milano4ka'});
// export async function getAuthCookiesByUser(
//   userName: UserName = DEFAULT_USER,
// ): Promise<Cookie[]> {
// //   // const {secretId, keyName} = getUserInfo(userName);
// // const {login, password} = await getCredentialsFromVault(secretId, keyName);
// const cookies = await getAuthCookiesByCredentials(milano4ka, Vbkfyf2442723444!);

// return parseCookies(cookies);
// }

// yavizTest.describe('AutPlay', () => { 
//   yavizTest('automatic video playback', async ({ridePage}) => { 
//     await ridePage.open(TestDataSource.emptyKalemMay2024); // это то что надо открыть там "урлы" проездов
//     await ridePage.waitForSceneReady(); // ждет пока сцена прогрузится там указан таймаут 
//     await ridePage.playButton.click(); // тут я нашла локатор плея и то как он называется в ride-page
//     expect(await ridePage.playButton.isHidden()).toBeTruthy(); 
//     await ridePage.pauseButton.click();
//     expect(await ridePage.pauseButton.isHidden()).toBeTruthy();
//   });
  yavizTest.only('open_spec_doc', async ({ridePage, page}) => { // Нужно перейти на новую сраницу используя Promise что бы сначала выполнялась одна функция потом другая и тест не падал
    const page = await page.goto('https://docs.yandex-team.ru/sdc/visualization/yaviz/usage/');
    await ridePage.open(TestDataSource.emptyKalemMay2024); // 
    await ridePage.waitForSceneReady();
    await ridePage.helpButtonHeader.click()
    expect(page.url()).toBe('http://test');
    ]);
//     console.log('!!!!!!!', newTab);
//     console.log('???????', newTab.url());
//     expect(newTab.url()).toBe('http://test');
//   });
//   yavizTest('show rover_name', async ({ridePage}) => {
//     await ridePage.open(TestDataSource.empyBenzon);
//     await ridePage.waitForSceneReady();
//     await ridePage.roverName.hover;
//     expect(await ridePage.roverName.isVisible()).toBeTruthy()
;
//   });
//   yavizTest('look_layers', async ({ridePage}) => {
//     await ridePage.open(TestDataSource.emptyKalemMay2024);
//     await ridePage.waitForSceneReady();
//     await ridePage.openLayerSettings('Car');
//     await ridePage.settings.clickLayerItem('Map');
//     await ridePage.settings.panelsAndLayersList.click();
//     await ridePage.checkSceneScreenshot('layer');
//   });
 
//   //addCommentButton // добвлять комменты в фаст комменты 
// });  

// yavizTest.describe('fastcomment', () => { 
//   yavizTest('fastcomment', async ({ridePage}) => { 
//     await ridePage.open(TestDataSource.emptyKalemMay2024); 
//     await ridePage.waitForSceneReady(); 
//     await ridePage.addCommentButton.click(); // нужно добавить какую кнопку нажиамтаь
    
//     expect(await ridePage.addCommentButton.isVisible()).toBeTruthy(); 
//   });
// });

