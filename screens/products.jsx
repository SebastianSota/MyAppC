import { SectionList, StyleSheet, View, Text } from "react-native"

const DATA = [
    {
        title: 'Botanas',
        data: ['Manzanas', 'Dulce', 'Papas']
    },
    {
        title: 'Ropa',
        data: ['Blusa', 'Vestidos', 'Hoddies']
    },
    {
        title: 'Comida',
        data: ['Tortas', 'Empanadas']
    }
];

const Products = () => {
    return (
        <View style={styles.container}>
            <SectionList sections={DATA}
                keyExtractor={
                    (item, index) => item + index
                }
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={
                    ({ section: {title} }) => (
                        <Text style={styles.header}>
                            {title}</Text>
                    )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});

export default Products;