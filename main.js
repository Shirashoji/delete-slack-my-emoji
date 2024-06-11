const myName = document.querySelector(
  "#team_site_left_nav_mount_point > div > div > button > div > div > div.p-team_site_user_info__display_name",
).textContent;

let i = 0;
const interval = setInterval(function () {
  console.log(i);
  if (
    document.querySelector(
      `#row-row_${i} > div > div > div:nth-child(4) > div > div`,
    ).textContent === myName
  ) {
    console.log(
      `Delete ${document.querySelector(`#row-row_${i} > div > div > div:nth-child(2) > div > div > b`)}`,
    );
    document
      .querySelector(
        `#row-row_${i} > div > div > div:nth-child(5) > div > div > button > i`,
      )
      .click();
    document
      .querySelector(
        "body > div.ReactModalPortal > div > div > div.c-dialog__footer.c-dialog__footer--has_buttons > div > button.c-button.c-button--danger.c-button--medium.c-dialog__go",
      )
      .click();
  } else {
    console.log(
      document.querySelector(
        `#row-row_${i} > div > div > div:nth-child(4) > div > div`,
      ).textContent,
    );
    i++;
  }
}, 300);
