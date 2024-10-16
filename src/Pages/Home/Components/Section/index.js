import React, { useContext, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Box, BoxTitle, BoxSlider } from './styles'
import { AuthContext } from '../../../../Contexts/auth'
import Card from '../Card';

export default function Section({ course }) {

    const { videos } = useContext(AuthContext)

    return (
        <Box>

            <BoxTitle> {course && course} </BoxTitle>
            <FlatList
                horizontal={true}
                data={videos[course]}
                keyExtractor={(item, index) => item.url+index}
                renderItem={({ item, index }) => (
                    <Card url={item.url} title={item.title} uploadedBy={item.uploadedBy} index={index} categorie={course} />
                )}
            />

        </Box>
    );
}