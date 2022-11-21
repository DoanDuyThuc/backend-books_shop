import styles from './Home.module.scss';

function Home() {
  return (
    <div className='Content'>
      <div className={styles.Home}>
          <div className={styles.HomeHeader} >
            <div className={styles.HomeHeaderLeft} >
              <h1>NAPOLEON HILL</h1>
              <span>“ĐƯỜNG ĐẾN THÀNH CÔNG”
  15 biển báo từ Napoleon Hill giúp bạn không bị lạc đường trên hành trình tìm kiếm sự thành công trong cuộc sốngTại sao thành công luôn mỉm cười với tất cả mọi người, còn với mình thì lại không? Tại sao việc đạt được điều bản thân mong muốn luôn trông dễ dàng với người khác, còn mình dù có nỗ lực bao nhiêu thì hai từ “thành công” vẫn cứ xa tầm với?
              </span>
              <button>
                Mua Ngay
              </button>
            </div>
            <div className={styles.HomeHeaderRight} >
              <img src='https://cafefcdn.com/thumb_w/650/2018/11/30/1ts-m6bdlihi5sa4ii7gjw-1543584782794689749022-crop-15435847995581097992133.jpeg'  />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
