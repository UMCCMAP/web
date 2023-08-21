import React, { useState, useEffect, useRef } from 'react';
import * as D from './styles/MapCafeDetail.style';
import CommonBtn from '../CommonBtn';
import { AiOutlineLeft } from 'react-icons/ai';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import CafeReview from './CafeReview';
import { ReactComponent as Scope } from '../../assets/images/scope.svg';
import SaveCafe from './MapReview/SaveCafe';
import baseAxios from '../../apis/baseAxios';
import { ReactComponent as Book } from '../../assets/images/book.svg';
import { ReactComponent as Coffee } from '../../assets/images/coffee.svg';
import { ReactComponent as Mountain } from '../../assets/images/mountain.svg';
import { ReactComponent as Car } from '../../assets/images/car.svg';
import { ReactComponent as Photo } from '../../assets/images/photo.svg';
import { ReactComponent as Bread } from '../../assets/images/bread.svg';
import { ReactComponent as Cake } from '../../assets/images/cake.svg';
import { ReactComponent as Pasta } from '../../assets/images/pasta.svg';

const fontColor = 'rgba(249, 255, 253, 1)';

function MapCafeDetail({ closeAction, getReviewIndex, getReviewData, color, data }) {
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [cafeData, setCafeData] = useState();
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [themeList, setThemeList] = useState([]);
  const reviewContainerRef = useRef(null);

  const openDetailHandler = () => {
    closeAction();
    getReviewIndex(0);
  };

  const handleModalClick = () => {
    setSaveModalOpen(false);
  };

  useEffect(() => {
    getCafeDetail();
    setPage(0);
    setReviewList([]);
    setThemeList([]);
  }, [data]);

  useEffect(() => {
    if (cafeData) {
      setIsLoading(true);
      allReviewList(0);
      const newThemeList = cafeData?.cafeThemes?.map((theme) => theme.themeName);
      setThemeList(newThemeList);
    }
  }, [cafeData]);

  const getCafeDetail = async () => {
    try {
      const response = await baseAxios.get(`cafes/${data}`);
      setCafeData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const allReviewList = async (pageNumber) => {
    try {
      const response = await baseAxios.get(`map/place/${data}/preview?size=10&page=${pageNumber}`);
      setReviewList((prevReviews) => [...prevReviews, ...response.data]);
      setPage(pageNumber + 1);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  const navItems = [
    {
      id: 1,
      name: '독서',
      theme: 'book',
      image: <Book fill={color} />,
    },
    {
      id: 2,
      name: '사진',
      theme: 'photo',
      image: <Photo fill={color} />,
    },
    {
      id: 3,
      name: '음료',
      theme: 'beverage',
      image: <Coffee fill={color} />,
    },
    {
      id: 4,
      name: '베이커리',
      theme: 'bakery',
      image: <Bread fill={color} />,
    },
    {
      id: 5,
      name: '뷰',
      theme: 'view',
      image: <Mountain fill={color} />,
    },
    {
      id: 6,
      name: '디저트',
      theme: 'dessert',
      image: <Cake fill={color} />,
    },
    {
      id: 7,
      name: '주차',
      theme: 'parking',
      image: <Car fill={color} />,
    },
    {
      id: 8,
      name: '브런치',
      theme: 'brunch',
      image: <Pasta fill={color} />,
    },
  ];

  const getImgCount = () => {
    const numImages = 1;
    switch (numImages) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      default:
        return 'over';
    }
  };
  // let remainer = search[0].images.length - 5;

  return (
    <>
      <D.DetailWrapper>
        <D.DetailImgContainer className={`${getImgCount()}`}>
          <AiOutlineLeft className="leftIcon" size={35} onClick={openDetailHandler} />
          {getImgCount() === 'over' ? (
            <>
              {/* {search[0].images.slice(0, 5).map((image, index) => (
                <div key={index}>
                  <D.DetailCafeImg src={image} alt="reviewPhoto" />
                  {index === 4 && (
                    <D.TextOverlay>
                      <MdOutlinePhotoCamera size="30" />
                      <p>{`${remainer}+ 더보기`}</p>
                    </D.TextOverlay>
                  )}
                </div>
              ))} */}
            </>
          ) : (
            <>
              {/* {data.images.map((image, index) => ( */}
              <div>
                <D.DetailCafeImg src={cafeData?.image} alt="reviewPhoto" />
              </div>
              {/* ))} */}
            </>
          )}
        </D.DetailImgContainer>
        <D.DetailCafeName color={color}>{cafeData?.name}</D.DetailCafeName>
        <D.ThemeBtnContainer>
          {themeList.map((theme) =>
            navItems.find((navItem) => navItem.theme === theme) ? (
              <div key={theme}>{navItems.find((navItem) => navItem.theme === theme).image}</div>
            ) : null,
          )}
        </D.ThemeBtnContainer>
        <D.ReviewScore>
          <Scope fill={color} />
          &nbsp;&nbsp;
          <span>{cafeData?.averageRating} / </span>
          &nbsp;
          <span>게시글 {cafeData?.totalPosts} / </span>
          &nbsp;
          <span>리뷰 {cafeData?.totalReviews}</span>
        </D.ReviewScore>
        <D.SaveBtnContainer>
          <CommonBtn
            name={cafeData?.cafeType != null ? cafeData?.cafeType : '지도에 저장'}
            width="70px"
            color={fontColor}
            background={color}
            clickEvent={() => {
              setSaveModalOpen(true);
            }}
          />
          <CommonBtn
            name="리뷰 작성"
            width="70px"
            color={fontColor}
            background={color}
            clickEvent={() => {
              getReviewIndex(1);
            }}
          />
        </D.SaveBtnContainer>
        <D.ReviewContainer ref={reviewContainerRef}>
          {reviewList?.map((data, index) => (
            <CafeReview
              key={index}
              data={data}
              closeAction={handleModalClick}
              getReviewIndex={getReviewIndex}
              getReviewData={getReviewData}
            />
          ))}
          {isLoading ? (
            <D.Loading>Loading...</D.Loading>
          ) : (
            <D.MoreReview
              onClick={() => {
                setIsLoading(true);
                allReviewList(page);
              }}
            >
              더보기
            </D.MoreReview>
          )}
        </D.ReviewContainer>
      </D.DetailWrapper>
      {saveModalOpen && <SaveCafe color={color} closeAction={handleModalClick} data={cafeData} />}
    </>
  );
}

export default MapCafeDetail;
