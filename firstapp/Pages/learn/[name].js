import { useRouter } from 'next/router'
import topics from '../api/topic'

export default function Learn() {
    const router = useRouter();
    const { name } = router.query;
    const Topic = topics.find(topic => topic.id === name); 
    return ( <h1> Learn { Topic && Topic.id } </h1> ); 
}