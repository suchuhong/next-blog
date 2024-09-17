import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2024-09-17</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
          <h1>文化</h1>
        </Link>
        <p className={styles.desc}>
          测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试
          测试
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
