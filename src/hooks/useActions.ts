import { useDispatch } from 'react-redux';
import bindActionCreators from 'react-redux/es/utils/bindActionCreators';

import { allActionCreators } from '../store/reducers/action-creators';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
};
