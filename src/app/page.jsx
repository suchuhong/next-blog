import Link from 'next/link';
import styles from './homepage.module.css';

export default function Home() {
  return (
    <div>
      <Link href='/'>
        <h1>漫步山川湖海：感受大自然的无尽魅力</h1>
        在繁忙的都市生活中，走进自然仿佛是一种治愈与逃离。山川湖海，皆是大自然的杰作，给人带来宁静与灵感。清晨的山林里，
        薄雾缭绕，鸟儿轻鸣，仿佛置身于世外桃源；
        傍晚的湖边，夕阳洒落在水面，涟漪如画，心灵也随之平静。大海则以它无边无际的宽广，
        令我们感受到生命的渺小与世界的浩瀚。
        每一次与自然的接触，都像是一场心灵的洗礼。高山的巍峨、湖水的宁静、海洋的浩荡，
        给了我们无尽的启示与力量。漫步其中，不仅是身体的放松，更是心灵的升华。无论走多远，
        山川湖海都在静静等候，欢迎我们再次回归这片美丽的自然怀抱。
      </Link>
    </div>
  );
}
