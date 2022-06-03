import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import RankLoading from "../Loading/RankLoading";
import { Table as T, Row } from 'react-native-table-component';
interface TableProps {
  loading: boolean;
  data: Array<Array<{}>>;
  tableHead: Array<string>;
  widthArr: Array<number>;
}

const Table: React.FC<TableProps> = ({ data, loading, tableHead, widthArr }) => {
  return (
    <>
      {loading ? <RankLoading /> :
        <ScrollView style={styles.dataWrapper} horizontal>
          <View>
            <T>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
            </T>
            <T>
              {
                data.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    // height={100}
                    style={[styles.row, index % 2 ? { backgroundColor: '#222431' } : {}]}
                    textStyle={styles.text}
                  />
                ))
              }
            </T>
          </View>
        </ScrollView>
      }
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#1d1f29'
  },
  dataWrapper: {
    marginTop: 15,
  },
  row: {
    height: 140,
    backgroundColor: '#272937',
    borderColor: '#1d1f29',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    elevation: 6,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Nunito_400Regular',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    /* identical to box height */
    color: '#FFF',
  },

})

export default Table;