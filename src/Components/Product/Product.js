import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assoc: null,
            url: null,
            count: 1,
            altPrice: true,
            goldPrice: null,
            price: null,
            altActive: 'unit--active',
            active: ''
        }
    }

    componentWillMount() {
        let Arr = this.props.assoc.filter((item) => item === "" ? false : true);
        let fileUrl = this.props.img.replace(/(\.[\w\d_-]+)$/i, '_220x220_1$1');
        this.setState({
            assoc: Arr,
            url: fileUrl,
            goldPrice: this.props.priceGoldAlt,
            price: this.props.priceRetailAlt

        });
    }

    typeOfPrice = (param, state) => {
        if (state) {
            this.setState({
                goldPrice: this.props.priceGoldAlt,
                price: this.props.priceRetailAlt,
                altActive: 'unit--active',
                active: ''
            })
        } else {
            this.setState({
                goldPrice: this.props.priceGold,
                price: this.props.priceRetail,
                altActive: '',
                active: 'unit--active'
            })
        }
    }

    Increment = () => {
        let add = this.state.count;
        add++
        this.setState({
            count: add
        })
    }

    Dicrement = () => {
        let remove = this.state.count;
        if (this.state.count > 1) {
            remove--
        }
        this.setState({
            count: remove
        })
    }

    handleChange = (event) => {
        this.setState({ count: event.target.value });
    }

    render() {
        const { productId,
            code,
            title,
            unitAlt,
            unit,
            unitRatio,
            unitRatioAlt } = this.props;



        return (
            <div className="product product_horizontal">
                <span className="product_code">Код: {code}</span>
                <div className="product_status_tooltip_container">
                    <span className="product_status">Наличие</span>
                </div>
                <div className="product_photo">
                    <a href="#" className="url--link product__link">
                        <img src={this.state.fileUrl} alt='main_image' />
                    </a>
                </div>
                <div className="product_description">
                    <a href="#" className="product__link">{title}</a>
                </div>
                <div className="product_tags hidden-sm">
                    <p>Могут понадобиться: </p>
                    {this.state.assoc

                        .map((item, i) => {
                            if (i < this.state.assoc.length - 1) {
                                return <a key={i} href="#" className="url--link">{item},</a>
                            } else {
                                return <a key={i} href="#" className="url--link">{item}.</a>
                            }
                        })
                    }
                </div>
                <div className="product_units">
                    <div className="unit--wrapper">
                        <div className={`unit--select ${this.state.altActive}`} onClick={(param) => this.typeOfPrice(param, true)}>
                            <p className="ng-binding">За {unitAlt}</p>
                        </div>
                        <div className={`unit--select ${this.state.active}`} onClick={(param) => this.typeOfPrice(param, false)}>
                            <p className="ng-binding">За {unit}</p>
                        </div>
                    </div>
                </div>
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">По карте<br />клуба</span>
                    <span className="goldPrice">{this.state.goldPrice} </span>
                    <span className="rouble__i black__i">
                        <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                            <use xmlnshref="http://www.w3.org/1999/xlink" xlinkHref="#rouble_black"></use>
                        </svg>
                    </span>
                </p>
                <p className="product_price_default">
                    <span className="retailPrice">{this.state.price} </span>
                    <span className="rouble__i black__i">
                        <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                            <use xmlnshref="http://www.w3.org/1999/xlink" xlinkHref="#rouble_gray"></use>
                        </svg>
                    </span>
                </p>
                <div className="product_price_points">
                    <p className="ng-binding">Можно купить за 231,75 балла</p>
                </div>
                <div className="list--unit-padd"></div>
                <div className="list--unit-desc">
                    <div className="unit--info">
                        <div className="unit--desc-i"></div>
                        <div className="unit--desc-t">
                            <p>
                                <span className="ng-binding">Продается упаковками:</span>
                                <span className="unit--infoInn">{unitRatio} {unit} = {unitRatioAlt} {unitAlt} </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product__wrapper">
                    <div className="product_count_wrapper">
                        <div className="stepper">
                            <input className="product__count stepper-input"
                                type="text"
                                value={this.state.count}
                                onChange={this.handleChange}
                            />
                            <span className="stepper-arrow up" onClick={this.Increment}></span>
                            <span className="stepper-arrow down" onClick={this.Dicrement}></span>
                        </div>
                    </div>
                    <span className="btn btn_cart" data-url="/cart/" data-product-id={productId}>
                        <svg className="ic ic_cart">
                            <use xmlnshref="http://www.w3.org/1999/xlink" xlinkHref="#cart"></use>
                        </svg>
                        <span className="ng-binding">В корзину</span>
                    </span>
                </div>
            </div>
        )
    }
}

export default Product;