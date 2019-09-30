const pcGames = [
  {
    title: "던전앤파이터",
    subtitle: "",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    recommend: {
      text: "많은 게이머가 즐기는"
    },
    genre: "액션 RPG",
    event: false
  },
  {
    title: "사이퍼즈",
    subtitle: "AOS/MOBA",
    image:
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1357&q=80",
    recommend: {
      text: "최근 업데이트 된"
    },
    genre: "MMORPG",
    event: true
  },
  {
    title: "카트라이더",
    subtitle: "크레이지 레이싱 카트라이더",
    image:
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    recommend: {
      text: "최근 게이머가 많은"
    },
    genre: "AOS/MOBA",
    event: false
  },
  {
    title: "메이플스토리",
    subtitle: "요정 웡키의 요술램프",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    recommend: {
      text: "최근 게이머가 많은"
    },
    genre: "RPG",
    event: false
  },
  {
    title: "엘소드",
    subtitle: "RPG",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    recommend: {
      text: "오랫동안 사랑받은"
    },
    genre: "RPG",
    event: false
  },
  {
    title: "FIFA ONLINE 4",
    subtitle: "스쿼드 빙고 이벤트!",
    image:
      "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
    recommend: {
      text: "오랫동안 사랑받은"
    },
    genre: "스포츠",
    event: false
  },
  {
    title: "서든어택",
    subtitle: "대한민국 FPS의 모든 재미",
    image:
      "https://images.unsplash.com/photo-1516315720917-231ef9acce48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
    recommend: {
      text: "오랫동안 사랑받은"
    },
    genre: "스포츠",
    event: false
  },
  {
    title: "마비노기",
    subtitle: "도전 포인트 이벤트 미션 시즌3",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    recommend: {
      text: "오랫동안 사랑받은"
    },
    genre: "RPG",
    event: false
  },
  {
    title: "마비노기",
    subtitle: "도전 포인트 이벤트 미션 시즌3",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    recommend: {
      text: "오랫동안 사랑받은"
    },
    genre: "RPG",
    event: false
  },
  {
    title: "마비노기",
    subtitle: "도전 포인트 이벤트 미션 시즌3",
    image:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    recommend: {
      text: "오랫동안 사랑받은"
    },
    genre: "RPG",
    event: false
  }
];

const banners = [
  {
    title: "어둠의 전설",
    subtitle: "길드의 전설",
    image:
      "https://images.unsplash.com/photo-1560439635-566eb81ac821?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "메이플스토리2",
    subtitle: "혁이와 대결! 셋, 둘 하나!",
    image:
      "https://images.unsplash.com/photo-1560492022-2e37ccfd137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "메이플 스토리",
    subtitle: "요정 윙키의 요술램프",
    image:
      "https://images.unsplash.com/photo-1560382797-66b2d275cb56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const mobileGames = [
  {
    title: "V4",
    event: true,

    genre: "MMORPG",
    download: {
      ios: true,
      android: true
    }
  },
  {
    title: "바람의나라: 연",
    event: true,

    genre: "MMORPG",
    download: {
      ios: true,
      android: true
    }
  },
  {
    title: "카운터사이드",
    event: false,

    genre: "수집형 RPG",
    download: {
      ios: true,
      android: true
    }
  },
  {
    title: "고질라 디펜스 포스",
    event: false,

    genre: "전략",
    download: {
      ios: false,
      android: true
    }
  },
  {
    title: "시노앨리스",
    event: true,

    genre: "RPG",
    download: {
      ios: true,
      android: true
    }
  },
  {
    title: "트라하",
    event: true,

    genre: "MMORPG",
    download: {
      ios: true,
      android: true
    }
  },
  {
    title: "크레이지아케이드",
    event: false,

    genre: "캐주얼",
    download: {
      ios: false,
      android: true
    }
  },
  {
    title: "린: 더 라이트브링어",
    event: true,

    genre: "수집형 RPG",
    download: {
      ios: true,
      android: true
    }
  },
  {
    title: "런웨이 스토리",
    event: false,

    genre: "캐주얼",
    download: {
      ios: true,
      android: false
    }
  },
  {
    title: "런닝맨 히어로즈",
    event: true,

    genre: "캐주얼",
    download: {
      ios: true,
      android: true
    }
  },
  {
    title: "스피릿위시",
    event: false,
    genre: "MMORPG",
    download: {
      ios: true,
      android: false
    }
  }
];
