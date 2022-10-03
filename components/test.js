const Test = () => {
  return (
    <div className={styles.container}>
      <div name={1} className={styles.main}>
        <div className={styles.line}>
          <h2>
            <span>بیتزا</span>
          </h2>
        </div>
      </div>
      <div className={styles.viper}>
        <div className={styles.diver}>
          {pitza.category.product.map((item) => (
            <Main key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
