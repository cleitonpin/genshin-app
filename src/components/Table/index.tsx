import * as React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table as T, Row } from 'react-native-table-component';

interface TableProps {
  upgrades: any;
}

const tableHead = ['Rank', 'Level', 'Cost', 'Mat #1', 'Mat #2', 'Mat #3', 'Mat #4']
const widthArr = [60, 60, 80, 150, 120, 140, 160]

export default function Table({ upgrades }: TableProps) {

  const tableData: string[][] = []

  for (let i = 0; i < upgrades.length; i += 1) {
    let rowData = [];
    const {
      rank,
      level,
      cost,
      material_one,
      material_two,
      material_three,
      material_four
    } = upgrades[i]

    rowData.push(rank);
    rowData.push(level);
    rowData.push(cost);
    rowData.push(material_one.name.replace('\n', ' '));
    rowData.push(material_two.name.replace('\n', ' '));
    rowData.push(material_three.name.replace('\n', ' '));
    rowData.push(material_four.name.replace('\n', ' '));
    tableData.push(rowData);
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <T >
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
          </T>
          <ScrollView style={styles.dataWrapper}>
            <T>
              {
                tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[styles.row, index % 2 ? { backgroundColor: '#222431' } : {}]}
                    textStyle={styles.text}
                  />
                ))
              }
            </T>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 50,
    backgroundColor: '#1d1f29'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Nunito_400Regular',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    /* identical to box height */
    color: '#FFFFFF',
  },
  dataWrapper: {
    marginTop: -1
  },
  row: {
    height: 60,
    backgroundColor: '#272937'
  },

})