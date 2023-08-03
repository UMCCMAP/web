import tempImg from '../../../assets/temp/tempcafeimg.jpg';
import tempImg2 from '../../../assets/temp/tempcafeimg2.png';
import tempImg3 from '../../../assets/temp/tempcafeimg3.jpg';
import tempImg4 from '../../../assets/temp/tempcafeimg4.png';
import tempImg5 from '../../../assets/temp/tempcafeimg5.jpg';
const Boards = [
  {
    title: '성수동 카페 뷰맛집!',
    content:
      '오늘 날이 좋아서 성수동에 카페를 가보았습니다! 막 들어간 카페 치고 뷰가 너무 좋더라구요 석양이 딱 보이는 위치고 디저트도 너무 맛있어요!!',
    image: [tempImg, tempImg2, tempImg4],
    theme: ['질문해요', '추천해요', '음료', 'CMAP'],
  },
  {
    title: '한강 근처 브런치 카페 추천',
    content:
      '한강 산책하다가 배가 고파져서 잠원 근처에 브런치 폭풍 검색..그리고 들어간 카페인데 가격도 괜찮고 맛있네요.. 다음에 또 올게요!',
    image: [tempImg3, tempImg5],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '서울 중심 데이트 카페',
    content:
      '서울 중심에 위치한 아늑한 데이트 카페를 발견했습니다! 분위기도 좋고 디저트 메뉴가 다양해서 좋았어요.',
    image: [],
    theme: ['추천해요', '디저트', '파스타'],
  },
  {
    title: '카페 매니아를 위한 음료 메카',
    content:
      '음료를 사랑하는 카페 매니아들을 위한 특별한 공간입니다. 다양한 음료 메뉴와 커피 아티스트의 솜씨를 즐겨보세요!',
    image: [tempImg3, tempImg4],
    theme: ['음료', 'CMAP'],
  },
  {
    title: '힐링을 선사하는 디저트 카페',
    content:
      '스트레스를 날려버릴 수 있는 힐링 디저트 카페를 소개합니다. 푸른 정원과 함께하는 디저트는 최고의 힐링입니다.',
    image: ['f', 'g'],
    theme: ['디저트'],
  },
  {
    title: '조용한 분위기의 도서 카페',
    content:
      '책과 커피를 함께 즐길 수 있는 조용하고 아늑한 분위기의 도서 카페입니다. 휴식을 취할 수 있는 최고의 장소!',
    image: ['h', 'i'],
    theme: ['질문해요', '디저트', '드립커피'],
  },
  {
    title: '친구들과 함께 떠나는 감성 여행',
    content: '감성적인 분위기가 특징인 여행 카페로, 친구들과 함께 특별한 추억을 만들어보세요.',
    image: ['j'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '공부와 커피를 동시에!',
    content:
      '공부와 커피를 동시에 즐길 수 있는 학생들의 메카. 책상을 대여해주는 서비스도 있습니다.',
    image: ['k', 'l'],
    theme: ['질문해요', '드립커피'],
  },
  {
    title: '산책 후 들르기 좋은 녹차 전문점',
    content:
      '산책 후 휴식하기 좋은 녹차 전문점. 녹차의 향기와 함께 몸과 마음을 풍요롭게 채워보세요!',
    image: ['m', 'n'],
    theme: ['음료', '디저트', '파스타'],
  },
  {
    title: '카페와 아트가 어우러진 문화 공간',
    content: '아티스트들의 작품과 함께하는 아름다운 카페로, 문화를 느끼고 싶을 때 방문해보세요.',
    image: ['o', 'p'],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '로맨틱한 강변 카페',
    content: '강변을 따라 위치한 로맨틱한 카페로, 연인과 함께 멋진 시간을 보낼 수 있습니다.',
    image: ['q', 'r'],
    theme: ['추천해요', '디저트'],
  },
  {
    title: '편안한 카페 & 작업공간',
    content: '편안하게 쉬고 작업할 수 있는 공간과 맛있는 음료를 즐길 수 있는 카페입니다.',
    image: ['s', 't'],
    theme: ['질문해요', '음료', '드립커피'],
  },
  {
    title: '힐링을 선사하는 실내 정원 카페',
    content:
      '실내에 아름다운 정원이 있는 힐링 카페로, 푸른 식물과 함께하는 특별한 시간을 즐겨보세요.',
    image: ['u', 'v'],
    theme: ['추천해요', '디저트'],
  },
  {
    title: '창문 밖으로 펼쳐지는 환상적인 전망',
    content: '창문 밖으로 펼쳐지는 환상적인 전망을 즐길 수 있는 특별한 카페입니다.',
    image: ['w', 'x'],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '카페에서 만나는 미술관',
    content: '미술작품과 커피가 어우러진 독특한 카페로, 예술을 느낄 수 있는 공간입니다.',
    image: ['y', 'z'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '근사한 테라스 뷰 카페',
    content: '테라스에서 바라보는 아름다운 경관과 함께하는 특별한 커피 타임을 즐겨보세요.',
    image: ['aa', 'bb'],
    theme: ['질문해요', '음료', '디저트'],
  },
  {
    title: '카페에서 즐기는 음악 라이브',
    content: '음악 라이브와 함께하는 특별한 카페 이벤트가 있는 곳입니다.',
    image: ['cc', 'dd'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '분위기 있는 저녁 카페',
    content: '분위기 있는 조명과 음악이 어울어지는 저녁 시간을 즐길 수 있는 카페입니다.',
    image: ['ee', 'ff'],
    theme: ['질문해요', '음료', '디저트', '파스타'],
  },
  {
    title: '힐링을 주는 산책로 카페',
    content: '산책로와 함께하는 아늑한 카페로, 힐링을 위한 특별한 공간입니다.',
    image: ['gg', 'hh'],
    theme: ['추천해요', '디저트', '드립커피'],
  },
  {
    title: '우물 안 개구리의 특별한 카페',
    content:
      '알고 있던 카페와는 또 다른 특별한 경험을 할 수 있는 곳으로, 참신한 메뉴를 즐겨보세요.',
    image: ['ii', 'jj'],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '오후의 아늑함을 선사하는 카페',
    content:
      '오후에 찾기 좋은 아늑한 카페로, 고급스러운 인테리어와 함께하는 특별한 시간을 보내보세요.',
    image: ['kk', 'll'],
    theme: ['질문해요', '디저트', '드립커피'],
  },
  {
    title: '물결 소리와 함께하는 바다 카페',
    content: '바다 전망과 함께하는 특별한 커피 타임을 즐길 수 있는 카페입니다.',
    image: ['mm', 'nn'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '몽환적인 분위기의 동화같은 카페',
    content: '몽환적인 분위기의 동화같은 카페로, 마치 이야기 속으로 들어온 듯한 기분을 느껴보세요.',
    image: ['oo', 'pp'],
    theme: ['질문해요', '디저트'],
  },
  {
    title: '멋진 조명과 함께하는 야경 카페',
    content: '야경과 함께하는 멋진 조명이 인상적인 카페로, 밤 시간에 특별한 경험을 즐겨보세요.',
    image: ['qq', 'rr'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '반려동물과 함께하는 펫 카페',
    content:
      '반려동물과 함께 즐길 수 있는 펫 카페로, 사랑스러운 동물들과 특별한 시간을 보내보세요.',
    image: ['ss', 'tt'],
    theme: ['질문해요', '음료', '디저트'],
  },
  {
    title: '공연과 함께하는 라이브 카페',
    content: '공연 라이브와 함께하는 특별한 커피 타임을 즐길 수 있는 카페입니다.',
    image: ['uu', 'vv'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '자연 속 커피 농장',
    content: '자연과 어우러진 커피 농장을 방문해 신선한 커피를 즐겨보세요.',
    image: ['ww', 'xx'],
    theme: ['질문해요', '드립커피'],
  },
  {
    title: '작은 작품들과 함께하는 미니어처 카페',
    content: '작은 작품들과 미니어처가 있는 특별한 카페로, 소소한 기쁨을 느껴보세요.',
    image: ['yy', 'zz'],
    theme: ['추천해요', '디저트'],
  },
  {
    title: '도심 속 오아시스',
    content: '도심 속에서도 즐길 수 있는 아름다운 정원과 함께하는 힐링 카페입니다.',
    image: ['aaa', 'bbb'],
    theme: ['질문해요', '음료', '디저트'],
  },
  {
    title: '로맨틱한 야외 테라스',
    content: '야외 테라스에서 느끼는 로맨틱한 분위기가 특별한 카페입니다.',
    image: ['ccc', 'ddd'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '성수동 카페 뷰맛집!',
    content:
      '오늘 날이 좋아서 성수동에 카페를 가보았습니다! 막 들어간 카페 치고 뷰가 너무 좋더라구요 석양이 딱 보이는 위치고 디저트도 너무 맛있어요!!',
    image: ['a', 'b', 'c'],
    theme: ['질문해요', '추천해요', '음료', 'CMAP'],
  },
  {
    title: '한강 근처 브런치 카페 추천',
    content:
      '한강 산책하다가 배가 고파져서 잠원 근처에 브런치 폭풍 검색..그리고 들어간 카페인데 가격도 괜찮고 맛있네요.. 다음에 또 올게요!',
    image: ['b', 'c'],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '서울 중심 데이트 카페',
    content:
      '서울 중심에 위치한 아늑한 데이트 카페를 발견했습니다! 분위기도 좋고 디저트 메뉴가 다양해서 좋았어요.',
    image: ['c', 'd'],
    theme: ['추천해요', '디저트', '파스타'],
  },
  {
    title: '카페 매니아를 위한 음료 메카',
    content:
      '음료를 사랑하는 카페 매니아들을 위한 특별한 공간입니다. 다양한 음료 메뉴와 커피 아티스트의 솜씨를 즐겨보세요!',
    image: ['e'],
    theme: ['음료', 'CMAP'],
  },
  {
    title: '힐링을 선사하는 디저트 카페',
    content:
      '스트레스를 날려버릴 수 있는 힐링 디저트 카페를 소개합니다. 푸른 정원과 함께하는 디저트는 최고의 힐링입니다.',
    image: ['f', 'g'],
    theme: ['디저트'],
  },
  {
    title: '조용한 분위기의 도서 카페',
    content:
      '책과 커피를 함께 즐길 수 있는 조용하고 아늑한 분위기의 도서 카페입니다. 휴식을 취할 수 있는 최고의 장소!',
    image: ['h', 'i'],
    theme: ['질문해요', '디저트', '드립커피'],
  },
  {
    title: '친구들과 함께 떠나는 감성 여행',
    content: '감성적인 분위기가 특징인 여행 카페로, 친구들과 함께 특별한 추억을 만들어보세요.',
    image: ['j'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '공부와 커피를 동시에!',
    content:
      '공부와 커피를 동시에 즐길 수 있는 학생들의 메카. 책상을 대여해주는 서비스도 있습니다.',
    image: ['k', 'l'],
    theme: ['질문해요', '드립커피'],
  },
  {
    title: '산책 후 들르기 좋은 녹차 전문점',
    content:
      '산책 후 휴식하기 좋은 녹차 전문점. 녹차의 향기와 함께 몸과 마음을 풍요롭게 채워보세요!',
    image: ['m', 'n'],
    theme: ['음료', '디저트', '파스타'],
  },
  {
    title: '카페와 아트가 어우러진 문화 공간',
    content: '아티스트들의 작품과 함께하는 아름다운 카페로, 문화를 느끼고 싶을 때 방문해보세요.',
    image: ['o', 'p'],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '로맨틱한 강변 카페',
    content: '강변을 따라 위치한 로맨틱한 카페로, 연인과 함께 멋진 시간을 보낼 수 있습니다.',
    image: ['q', 'r'],
    theme: ['추천해요', '디저트'],
  },
  {
    title: '편안한 카페 & 작업공간',
    content: '편안하게 쉬고 작업할 수 있는 공간과 맛있는 음료를 즐길 수 있는 카페입니다.',
    image: ['s', 't'],
    theme: ['질문해요', '음료', '드립커피'],
  },
  {
    title: '힐링을 선사하는 실내 정원 카페',
    content:
      '실내에 아름다운 정원이 있는 힐링 카페로, 푸른 식물과 함께하는 특별한 시간을 즐겨보세요.',
    image: ['u', 'v'],
    theme: ['추천해요', '디저트'],
  },
  {
    title: '창문 밖으로 펼쳐지는 환상적인 전망',
    content: '창문 밖으로 펼쳐지는 환상적인 전망을 즐길 수 있는 특별한 카페입니다.',
    image: ['w', 'x'],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '카페에서 만나는 미술관',
    content: '미술작품과 커피가 어우러진 독특한 카페로, 예술을 느낄 수 있는 공간입니다.',
    image: ['y', 'z'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '근사한 테라스 뷰 카페',
    content: '테라스에서 바라보는 아름다운 경관과 함께하는 특별한 커피 타임을 즐겨보세요.',
    image: ['aa', 'bb'],
    theme: ['질문해요', '음료', '디저트'],
  },
  {
    title: '카페에서 즐기는 음악 라이브',
    content: '음악 라이브와 함께하는 특별한 카페 이벤트가 있는 곳입니다.',
    image: ['cc', 'dd'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '분위기 있는 저녁 카페',
    content: '분위기 있는 조명과 음악이 어울어지는 저녁 시간을 즐길 수 있는 카페입니다.',
    image: ['ee', 'ff'],
    theme: ['질문해요', '음료', '디저트', '파스타'],
  },
  {
    title: '힐링을 주는 산책로 카페',
    content: '산책로와 함께하는 아늑한 카페로, 힐링을 위한 특별한 공간입니다.',
    image: ['gg', 'hh'],
    theme: ['추천해요', '디저트', '드립커피'],
  },
  {
    title: '우물 안 개구리의 특별한 카페',
    content:
      '알고 있던 카페와는 또 다른 특별한 경험을 할 수 있는 곳으로, 참신한 메뉴를 즐겨보세요.',
    image: ['ii', 'jj'],
    theme: ['질문해요', '음료', 'CMAP'],
  },
  {
    title: '오후의 아늑함을 선사하는 카페',
    content:
      '오후에 찾기 좋은 아늑한 카페로, 고급스러운 인테리어와 함께하는 특별한 시간을 보내보세요.',
    image: ['kk', 'll'],
    theme: ['질문해요', '디저트', '드립커피'],
  },
  {
    title: '물결 소리와 함께하는 바다 카페',
    content: '바다 전망과 함께하는 특별한 커피 타임을 즐길 수 있는 카페입니다.',
    image: ['mm', 'nn'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '몽환적인 분위기의 동화같은 카페',
    content: '몽환적인 분위기의 동화같은 카페로, 마치 이야기 속으로 들어온 듯한 기분을 느껴보세요.',
    image: ['oo', 'pp'],
    theme: ['질문해요', '디저트'],
  },
  {
    title: '멋진 조명과 함께하는 야경 카페',
    content: '야경과 함께하는 멋진 조명이 인상적인 카페로, 밤 시간에 특별한 경험을 즐겨보세요.',
    image: ['qq', 'rr'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '반려동물과 함께하는 펫 카페',
    content:
      '반려동물과 함께 즐길 수 있는 펫 카페로, 사랑스러운 동물들과 특별한 시간을 보내보세요.',
    image: ['ss', 'tt'],
    theme: ['질문해요', '음료', '디저트'],
  },
  {
    title: '공연과 함께하는 라이브 카페',
    content: '공연 라이브와 함께하는 특별한 커피 타임을 즐길 수 있는 카페입니다.',
    image: ['uu', 'vv'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
  {
    title: '자연 속 커피 농장',
    content: '자연과 어우러진 커피 농장을 방문해 신선한 커피를 즐겨보세요.',
    image: ['ww', 'xx'],
    theme: ['질문해요', '드립커피'],
  },
  {
    title: '작은 작품들과 함께하는 미니어처 카페',
    content: '작은 작품들과 미니어처가 있는 특별한 카페로, 소소한 기쁨을 느껴보세요.',
    image: ['yy', 'zz'],
    theme: ['추천해요', '디저트'],
  },
  {
    title: '도심 속 오아시스',
    content: '도심 속에서도 즐길 수 있는 아름다운 정원과 함께하는 힐링 카페입니다.',
    image: ['aaa', 'bbb'],
    theme: ['질문해요', '음료', '디저트'],
  },
  {
    title: '로맨틱한 야외 테라스',
    content: '야외 테라스에서 느끼는 로맨틱한 분위기가 특별한 카페입니다.',
    image: ['ccc', 'ddd'],
    theme: ['추천해요', '음료', 'CMAP'],
  },
];
export default Boards;
