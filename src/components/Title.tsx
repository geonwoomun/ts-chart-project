import * as React from 'react';
import { useTitle } from '../hooks/useTitle';

const Title = () => {
    const { title, titleChange, titleSubmit } = useTitle();
    return (
        <form onSubmit={titleSubmit}>
         <input value={title} onChange={titleChange} placeholder="제목을 적어주세요."/>
         <button type="submit">적용</button>          
        </form>
    );
};

export default Title;