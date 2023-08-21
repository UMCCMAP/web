import tempImg from '../../../assets/temp/tempcafeimg2.png';
import tempImg2 from '../../../assets/temp/tempcafeimg.jpg';

const BoardViewData = {
  themes: ['추천해요', '한강 뷰', '조용한', '빵 맛집', '주차관리'],
  title: '성수동 카페 뷰 맛집!',
  date: '23/07.10',
  user: 'User',
  cafeName: '성수 RSG',
  content: [
    {
      content:
        '오늘 방문한 성수동에 OOO 카페입니다.\n\n막 들어간 카페 치고 뷰가 너무 좋더라구요\n석양이 딱 보이는 위치고 디저트도 너무 맛있어요!!\n\n',
      image: `${tempImg}`,
    },
    {
      content: '메뉴가 생각보다 많아요!\n암튼 전 콜드브루 성애자라서 콜드브루 겟겟',
      image: `${tempImg2}`,
    },
  ],
  heart: 3,
  review: [
    {
      user: 'USER',
      date: '23/07/12',
      content: '오..주차가 편리해서 좋은 것 같아요! 좋은 정보 감사합니다! 좋아요 누르고 가요~',
    },
    {
      user: 'Alice',
      date: '23/08/05',
      content: '맛도 좋고 분위기도 좋아요. 다음에 또 방문하고 싶습니다.',
    },
    {
      user: 'Bob',
      date: '23/08/15',
      content: '서비스가 친절하고 가격도 저렴해서 매우 만족했습니다.',
    },
    {
      user: 'Charlie',
      date: '23/09/01',
      content: '디저트가 정말 맛있어요. 특히 초콜릿 케이크가 최고입니다!',
    },
    {
      user: 'Eve',
      date: '23/09/10',
      content: '파스타가 진짜 맛있어요. 이탈리아에서 먹은 것 같은 느낌!',
    },
  ],
};
export default BoardViewData;
