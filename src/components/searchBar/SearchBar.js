import React from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({onSubmit,onChange,query}) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button
        type="submit"
        onChange={onChange}
        className={styles.SearchForm_button}
      >
        <span className={styles.SearchForm_button__label}>Search</span>
      </button>

      <input
        className={styles.SearchForm_input}
        type="text"
        value={query}
        name="query"
        onChange={onChange}
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default SearchBar;



// state={
//     query:''
// }

// handleChange =(e)=>{
//     this.setState({
//         query:e.target.value
//     })
// }

// handleSubmit =(e)=>{
//     e.preventDefault()
//     this.props.onSubmit(this.state.query);
//     this.setState({
//         query:''
//     })
// }
