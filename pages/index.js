import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { cakeAndDesser, pitza } from "../functions/fetchAPI";
import { Link } from "react-scroll";
import svg from "../components/assets/love.svg";
import plage from "../components/assets/1.jpg";
import pizza from "../components/assets/peperoni.jpg";

export default function Home({ pitza, cake }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.fullScreen}>
          <div name={14} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>مجموعه پلاژ </span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.plage}>
              <Image src={plage} />
              <div className={styles.text}>
                <span className={styles.majmooe}>مجموعه ی پلاژ</span>
                <br />
                ما در مجموعه ی پلاژ
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={13} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>پیتزا</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {pitza.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>

        <div className={styles.fullScreen}>
          <div name={3} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>غذای اصلی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {essperso.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={5} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>نوشیدنی پایه اسپرسو</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {essperso.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={6} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>نوشیدنی پایه شکلات</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={7} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>ماکتیل و ابمیوه طبیعی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={8} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>اسموتی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={4} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>غذای سنتی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={2} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>دسر و کیک</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {cake.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={1} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>میلک شیک</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={9} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>پاستا</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={10} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>پیش غذا</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={11} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>استایل امریکایی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={15} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span> چای و دمنوش</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={12} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span> صبحانه</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <span>Scroll top</span>
        <div className={styles.footer}>
          <div className={styles.payam}>
            <span>Made With </span>
            <div className={styles.fake}>
              <span className={styles.svg}>
                <Image src={svg} width={50} height={50} />
              </span>{" "}
            </div>
            <span>By</span>
            <div className={styles.name}>
              <Link href="https://www.lioncomputer.com/" passHref>
                Payam Afshari
              </Link>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export async function getServerSideProps() {
  const pitzaFood = await pitza();
  // const cakeDesser = await cakeAndDesser();
  return {
    props: {
      pitza: pitzaFood,
      // cake: cakeDesser,
    },
  };
}
