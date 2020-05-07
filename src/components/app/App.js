import React, { Component } from 'react'
import styles from './app.module.css'
import fetchQuery from '../fetchQuery/FetchQuery'
import ImageGallery from '../imageGallery/ImageGallery'
import Loader from '../loader/Loader'
import SearchBar from '../searchBar/SearchBar'
import LoadMoreBtn from '../button/LoadMoreBtn'


export default class App extends Component {
    state = {
        articles:[],
        query:'',
        isLoading:false,
        page: 1,
        
    };

    
componentDidMount() {
fetchQuery()
}

    handleChange =(e)=>{
        this.setState({
            query:e.target.value
        })
    }

    handleSubmit =(e)=> {
        e.preventDefault()
        const {query,page} = this.state
        this.setState({isLoading:true})
            fetchQuery(query,page)
            .then(({data}) => {
                this.setState({articles: data.hits, page: 1})
                console.log(data.hits);
            })
            .catch (error => this.setState({error}))
            .finally(() =>this.setState({isLoading:false}));
    }
                
    handleLoadClick = () => {
        const{query,page} = this.state
        fetchQuery(query,page+1)
        .then(({data}) => {
            this.setState(prevState =>({articles: [...prevState.articles,...data.hits], page:prevState.page+1}))
            // console.log(data.hits);
        }).then(()=>{this.scrollWin()})
        .catch (error => this.setState({error}))
        .finally(() =>this.setState({isLoading:false}));
        // this.scrollWin()
    }

    scrollWin() {
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    
    


render() {
    const {articles, isLoading, query ,page} = this.state
 return (
 <div className={styles.App}>
     <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit} query={query} page={page}/>
     {isLoading && <Loader/>}
     {articles.length>0 && <ImageGallery items={articles}/>}
     <LoadMoreBtn onClick={this.handleLoadClick} />      
 </div>
 )
}

} 