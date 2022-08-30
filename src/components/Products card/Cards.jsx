import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

// import all card data 
import { VegCardData } from './CardData';
import { FruitCardData } from './CardData';
import { HerbsCardData } from './CardData';


import './Cards.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '../../modules/Reducer/reducer';




export default function MediaCard() {

    // dispatch the store
    const dispatch = useDispatch();

    // product state for product card data in empty array
    const [product, setProduct] = useState([])

    // fetch filterData state from store to variable
    const filterData = useSelector(state => state.product.filterData)

    const dataChange = useSelector(state => state.product.dataChanged)
    const searchData = useSelector(state => state.product.searchData)


    useEffect(() => {

        // filter product logic 
        if (filterData.length) {
            switch (filterData) {
                case 'fruites':
                    setProduct([...FruitCardData])
                    break;
                case 'vegetables':
                    setProduct([...VegCardData])
                    break;
                case 'herbs':
                    setProduct([...HerbsCardData])
                    break;
                case 'All':
                    setProduct([...VegCardData, ...FruitCardData, ...HerbsCardData])
                    break;
                case 'default':
                    setProduct([...VegCardData, ...FruitCardData, ...HerbsCardData])
            }
        }
    }, [filterData])


    // search product logic
    useEffect(() => {
        setProduct([...VegCardData, ...FruitCardData, ...HerbsCardData])
    }, []);

    useEffect(() => {
        if (dataChange) {
            // check the lower and upper case comparison between card data and searchData state
            let data = product.filter(e => e.title.toLowerCase() === searchData.toLowerCase())
            setProduct([...data])
        }
        else {
            setProduct([...VegCardData, ...FruitCardData, ...HerbsCardData])
        }

    }, [dataChange])


    return (
        <>
            {/* card components */}
            <div className="container Cards ">
                {product.length && product.map(element => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={element.id} style={{ border: '.5px solid #e6e6e6' }} className="Card">
                            <CardMedia
                                component="img"
                                className="card-img"
                                image={element.image}
                                alt="green iguana"
                            />
                            <div style={{ margin: '10px', backgroundColor: '#f4f3f2' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {element.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {element.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <div className= "parent-qty-div">
                                        <div className="qty-div">
                                            <label htmlFor="input" style={{ paddingRight: "4px" }}>Qty</label>
                                            <input type="text" id="qty-input" placeholder='1' />
                                        </div>

                                        <div className="card-button">
                                            <Button size="small" style={{ backgroundColor: "#f3cc76", color: '#000', height: "1.6rem" }}
                                                onClick={() => {dispatch(setCount())}}
                                            >ADD</Button>
                                        </div>
                                    </div>
                                </CardActions>

                            </div>

                        </Card>
                    );
                })}
            </div>


        </>
    )

}
