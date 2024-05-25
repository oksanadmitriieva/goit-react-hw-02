import css from './Options.module.css';

export default function Options({
  onLeaveFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.buttons}>
      <button className={css.btn} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
