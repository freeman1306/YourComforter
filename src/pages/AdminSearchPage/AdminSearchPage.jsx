import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import styles from "./AdminSearchPage.module.scss";
// import moment from "moment";
import filterServices, {query as existingQuery} from "../../helpers/filterServices"
import services from "../../service";

import BasicPageLayout from "../../layouts/BasicPageLayout/BasicPageLayout";
import Loading from "../../components/Loading/Loading";
import NoResultsFound from "../../components/NoResultsFound/NoResultsFound";

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';
import Checkbox from '../../components/Checkbox/Checkbox';
// import InputDate from '../../components/InputDate/InputDate';
import InputRange from '../../components/InputRange/InputRange';
import RatingStars from '../../components/RatingStars/RatingStars';
import UsersTable from '../../components/UsersTable/UsersTable';

import FilterBar from '../../components/FilterBar/FilterBar';
import Filter from '../../components/Filter/Filter';

import getUsers from '../../actions/user/getUsers';
import getServices from '../../actions/services/getServices';

import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg';
import { ReactComponent as Vector } from '../../icons/vector.svg';

import { timeGenerator } from '../../helpers/timeGenerator';

class AdminSearchPage extends Component {
    state = {
        query: '',
        // sort: {},
        suggestions: [],
        filterVisible: false,
        // cityInput: '',
        city: [],
        services: [],
        roles: [
            {name: "seeker", checked: false},
            {name: "comforter", checked: false}
        ],
        // date: "----/--/--",
        time: {
            from: {},
            to: {}
        },
        age: {
            min: 18,
            max: 70
        },
        // favorites:[],
        rate: 0,
        loading: true,
        page: 1,
    };
    times = timeGenerator();
    baseState = {...this.state};

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.services.length < nextProps.services.length) {
            const services = nextProps.services.map(el => ({
                ...el,
                checked: false
            }));
            return {
                services
            };
        }
        if(prevState.page !== Number(nextProps.match.params.page)){
            return {page: Number(nextProps.match.params.page) || 1}
        }
        return prevState;
    }

    componentDidMount() {
        const search = this.props.location.search;
        this.props.getUserList(this.props.match.params.page || this.state.page, 10, search);
        this.waitAndUpdateState();
    }

    componentWillUnmount(){
        filterServices.clearQuery()
    }

    async waitAndUpdateState() {       // Function that allows us to update state according to parameters received from URL when base state come from props
        await this.props.getServicesList(); // Wait till list of services come to state from props
        const newState = filterServices.getStateFromUrl(this.props.location.search, this.state); // get new state from props
        this.setState({...newState}); // update state
        filterServices.queryGenerator(this.state, this.baseState); // Assign values to query in the serviceSeekerSearchPage
        const {favoriteIds} = await services.userService.getFavorites(); // Get favorite comforters for current seeker
        this.setState({favorites: favoriteIds});
        this.setState({loading: false});
    };

    componentDidUpdate(prevProps){
        if(prevProps.match.params.page !== this.props.match.params.page){
            (async()=>{
                this.setState({loading:true})
                await this.setState({page: Number(this.props.match.params.page) || 1});
                await this.props.getUserList(this.state.page, 10, this.props.location.search ? this.props.location.search : prevProps.location.search);
                const newUrl = `/user-search/${this.state.page}${this.props.location.search ? this.props.location.search : prevProps.location.search}`;
                this.props.history.push(newUrl); 
                this.setState({loading:false})
            })()
        }
    }

    handleSearchChange = e => {
        this.setState({ query: e.target.value });
    };

    // handleAddingCity = (e) => {
    //     if (this.handleValidateCity(e)) {
    //         this.setState(({city}) => ({
    //             city: [...city, e],
    //             cityInput: ''
    //         }))
    //     }
    // };
    // handleDeletingCity = (e) => {
    //     const newCity = this.state.city.filter((city, index) => {
    //         return index !== e;
    //     });
    //     this.setState({
    //         city: newCity
    //     });
    // };
    // handleValidateCity = (e) => {   // Validate cities so user cannot select the same city many times
    //     const isCityInArray = this.state.city.filter((el) => el.name === e.name);
    //     return this.state.city.length === 0 || isCityInArray.length < 1 ? true : false;
    // };
    // handleCityInput = async(cityInput) => {
    //     this.setState({cityInput});
    //     if (cityInput.length > 2) {
    //         const districts = await services.seekerService.getDistrict(cityInput);
    //         this.setState({suggestions: districts})
    //     }
    //     else this.setState({suggestions: []})
    // };

    // changeDate = e => {
    //     this.setState({
    //         date: e
    //     });
    // };

    handleCheck = e => {
        const name = e.target.name;
        const servs = this.state.services.map(el => {
            if (el.name === name) {
                return (el = { ...el, checked: !el.checked });
            }
            return el;
        });
        this.setState(({ services }) => ({
            services: servs
        }));
    };

    handleCheckRole = e => {
        const name = e.target.name;
        let isRoleStatus = false;
        let role = this.state.roles.map(el => {
            if (el.name === name) {
                isRoleStatus = !el.checked;
                return (el = { ...el, checked: !el.checked });
            }
            return el;
        });
        if (isRoleStatus) {
            role = role.map(el => {
                if (el.name !== name) {
                    return (el = { ...el, checked: false });
                }
                return el;
            });
        }
        this.setState({roles: role});
    };

    handleReset = () => {

        this.setState({
            ...this.baseState,
            query: this.state.query,
            sort: this.state.sort,
            favorites: this.state.favorites,
            loading: false,
            page: 1
        }); // returning the state object to the default state
        let queryAfterReset = [];
        if (this.state.query !== '') {
            queryAfterReset.push(`query=${this.state.query}`)
        }
        // if (this.state.sort.id != null) {
        //     queryAfterReset.push(`sort_direction=${this.state.sort.id}`)
        // }
        queryAfterReset = queryAfterReset.join('&');
        this.props.history.push({    // clearing query in the url
            search: `${queryAfterReset}`
        });
        this.props.getUserList(this.state.page, 10, `?${queryAfterReset}`);
        filterServices.clearQuery();
    };


    handleApply = () => {
        filterServices.clearQuery();
        const search = this.props.history.location.search;

        let q = filterServices.queryGenerator(this.state, this.baseState);
        // if (search.includes('sort_direction') && this.state.sort.id != null) { // check if there is sort direction in the url
        //     q = q.concat(`sort_direction=${this.state.sort.id}&`)
        // }
        if (search.includes('query') && this.state.query !== '') {  // check if there is query in the url
            q = q.concat(`query=${this.state.query}&`)
        }
        q = q.substring(0, q.length - 1);  // cut last & from the url
        this.props.history.push({
            pathname: `/user-search/1`,
            search: `?${q}`
        });
        this.props.getUserList(1, 10, `?${q}`);
    };

    // handleSortChange = (e) => {
    //     this.setState({sort: e});
    //     const search = this.props.history.location.search;
    //     let urlWithoutSort = search.replace('&sort_direction=asc', '').replace('&sort_direction=desc', '').replace('sort_direction=desc', '').replace('sort_direction=asc', '');
    //     if (urlWithoutSort === '') {
    //         this.props.history.push({
    //             search: `sort_direction=${e.id}`
    //         });
    //         this.props.getUserList(this.state.page, 10, `?sort_direction=${e.id}`)
    //     }
    //     else {
    //         let q = urlWithoutSort;
    //         q = q.concat(`&sort_direction=${e.id}`);
    //         if (q[1] === '&') {  // Delete & from the first position in the query
    //             q = q.substring(0, 1).concat(q.substring(2, q.length));
    //         }
    //         this.props.history.push({
    //             search: `${q}`
    //         });
    //         this.props.getUserList(this.state.page, 10, `${q}`);
    //     }
    // };

    handleSearchButton = () => {
        const {query, sort} = this.state;
        let generatedQuery = existingQuery.join(''); // Take the generatedQuery from the servicesSeekerSearchPage
        if (sort.id != null) { // adding sort_direction to the query if it is not null
            generatedQuery = generatedQuery.concat(`sort_direction=${sort.id}&`)
        }
        if (query !== '') {
            let q = '';
            if (this.props.history.location.search === '') {
                q = q.concat(`?query=${query}`);
                this.props.history.push({
                    pathname: `/user-search/1`,
                    search: `${q}`
                });
                this.props.getUserList(this.state.page || 1, 10, `${q}`)
            }
            else {                  // if there is existing search query in the url
                q = q.concat(`?query=${query}&${generatedQuery}`);
                q = q.substring(0, q.length - 1);    // cut last element '&'
                this.props.history.push({
                    pathname: `/user-search/1`,
                    search: `${q}`
                });
                this.props.getUserList(this.state.page || 1, 10, `${q}`)
            }
        }
        else {               // when query === '' delete query from the url and request
            let q = `?${generatedQuery}`;
            q = q.substring(0, q.length - 1);
            this.props.history.push({
                pathname: `/user-search/1`,
                search: `${q}`
            });
            this.props.getUserList(this.state.page || 1, 10, `${q}`)
        }
    };

    // addToFavorite = (id) => {
    //     services.userService.addToFavorite(id)
    // };

    // removeFromFavorites = (id) => {
    //     services.userService.removeFromFavorites(id)
    // };

    rateChangeHandler = rate => this.setState({ rate });

    render() {
        const {users, totalCount, pages, match: {params}} = this.props;
        const {filterVisible, query, roles, services, age, rate, loading } = this.state;
     
        return (
            <BasicPageLayout style={{margin: "21px auto"}} title="Users">
                <div className={styles.mainWrap}>
                    <div className={styles.topWrap}>
                        <div className={styles.inputWrap}>
                            <Input
                                label="Search (by service, location, name):"
                                placeholder="I am looking for..."
                                name="search"
                                className="findCompany"
                                icon={<SearchIcon />}
                                onChange={(e) => {
                                    this.handleSearchChange(e)
                                }}
                                value={query}
                                onKeyUp={(e) => {
                                    if (e.keyCode === 13) {
                                        this.handleSearchButton();
                                    }
                                }}
                            />
                        </div>

                        <div className={styles.btnWrap}>
                            <Button width="20%"
                                    buttonStyle="secondary"
                                    className={styles.filterButton}
                                    name="filter"
                                    onClick={() => {
                                        this.setState(({filterVisible}) => ({
                                            filterVisible: !filterVisible
                                        }))
                                    }}
                            >
                                <Vector />
                            </Button>
                            <Button
                                width="100%"
                                className={styles.searchButton}
                                onClick={() => {
                                    this.handleSearchButton();
                                }}>
                                Search
                            </Button>
                        </div>
                    </div>
                    <FilterBar
                        ResetButton={
                            <Button width="90%" buttonStyle="secondary" onClick={() => {
                                this.handleReset()
                            }}>
                                Reset
                            </Button>
                        }
                        ApplyButton={
                            <Button width="90%" onClick={() => {
                                this.handleApply()
                            }}>
                                Apply
                            </Button>
                        }
                        filterToggle={() => this.setState({filterVisible: false})}
                        isVisible={filterVisible}>
                        <Filter
                            title="Location:"
                            displayedElements={4}>
                            {services.map((el) => {
                                return (<Checkbox
                                    key={el.id}
                                    className={styles.filterCheckbox}
                                    label={el.name}
                                    value={String(el.checked)}
                                    name={el.name}
                                    onChange={(e) => {
                                        this.handleCheck(e)
                                    }}
                                    checked={el.checked}
                                />)
                            })}
                        </Filter>
                        <Filter title="Role">
                            {roles.map((el, index) => {
                                return (<Checkbox
                                    key={el.name}
                                    className={styles.filterCheckbox}
                                    label={el.name === "comforter"? "Professional": "Seeker"}
                                    value={String(el.checked)}
                                    name={el.name}
                                    onChange={(e) => {
                                        this.handleCheckRole(e)
                                    }}
                                    checked={el.checked}
                                />)
                            })}
                            {/* <Checkbox
                                className={styles.filterCheckbox}
                                label="Seeker"
                                value={String(is_favorite)}
                                name="seeker"
                                onChange={() => {
                                    this.setState(({is_favorite}) => ({
                                        is_favorite: !is_favorite
                                    }))
                                }}
                                checked={is_favorite}
                            />
                             <Checkbox
                                className={styles.filterCheckbox}
                                label="Professional"
                                value={String(is_favorite)}
                                name="comforter"
                                onChange={() => {
                                    this.setState(({is_favorite}) => ({
                                        is_favorite: !is_favorite
                                    }))
                                }}
                                checked={is_favorite}
                            /> */}
                        </Filter>
                        {/* <Filter title="Date:">
                            <InputDate
                                value={String(moment(date, 'YYYY-MM-DD').toDate()) === 'Invalid Date' ? date : moment(date, 'YYYY-MM-DD').toDate()}
                                onChange={(e) => {
                                    this.changeDate(moment(e).format('YYYY-MM-DD'));
                                }}
                                onClick={() => {
                                    if (this.state.date === '----/--/--') {
                                        this.setState({
                                            date: moment().format('YYYY-MM-DD')
                                        });
                                    }
                                }}
                            />
                        </Filter> */}
                        <Filter title="Age (years):">
                            <Input name="age-start"
                                   style={{width: '45%', float: 'left'}}
                                   value={age.min}
                                   readOnly={true}
                            />
                            <Input name="age-end"
                                   style={{width: '45%', marginLeft: '15px', marginBottom: '27px'}}
                                   value={age.max}
                                   readOnly={true}
                            />
                            <InputRange
                                min={18}
                                max={70}
                                step={1}
                                value={age}
                                onChange={(e) => {
                                    this.setState((state) => ({
                                        ...state,
                                        age: e
                                    }))
                                }}
                            />
                        </Filter>
                        <Filter title='Minimum Rating:'>
                            <RatingStars
                                size={25}
                                stSize={22}
                                value={Number(rate)}
                                className={styles.reviewStars}
                                onChange={this.rateChangeHandler}
                            />
                        </Filter>
                    </FilterBar>
                    <div className={styles.usersWrap}>
                        <h3>Results</h3>
                        {loading ? <Loading/> : totalCount > 0 ? (
                                    <>
                                        <UsersTable users={users} /> 
                                        <div className={styles.paginationWrap}>
                                            <Pagination pages={pages} currentPage={parseInt(params.page, 10) || 1} linkBase="user-search"/>
                                        </div>
                                    </>
                                    ) : <NoResultsFound icon="results" title="No results found!" text="We can’t find any item matching your search."/>}

                        
                    </div>
                </div>
            </BasicPageLayout>
        )
    }
}

export default withRouter(
    connect(
        state => ({
            pages: state.users.pages,
            totalCount: state.users.totalCount,
            users: state.users.result,
            services: state.services.result
        }),
        { getUserList: getUsers, getServicesList: getServices }
    )(AdminSearchPage)
);
