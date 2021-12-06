import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, getFirestore, collection } from "@firebase/firestore";
import { Loading } from "@components/Icons";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Entry from '@components/Entry';

export default function Page() {

  const db = getFirestore();
  const auth = getAuth();
  const [entries, entriesLoading] = useCollectionData(query(collection(db, "transactions")), { idField: "id" });
  const [user, userLoading] = useAuthState(auth);


  //Check if Phil bought something for Milli
  function isPhil(entry) {
    if(entry.purchaser == "phil" && entry.recipient == "milli"){
      return true;
    }
    return false;
  }

  //Check if Milli bought something for Phil
  function isMilli(entry) {
    if(entry.purchaser == "milli" && entry.recipient == "phil"){
      return true;
    }
    return false;
  }

  //Amount that Phil owes to Milli
  const philToMilli = () => {
    var total = 0;
    if(entriesLoading) return;
    entries.filter(isMilli).forEach(entry => {
      total += +entry.amount;
    });
    return total;
  }

  //Amount that Milli owes to Phil
  const milliToPhil = () => {
    var total = 0;
    if(entriesLoading) return;
    entries.filter(isPhil).forEach(entry => {
      total += +entry.amount;
    });
    return total;
  }

  return (
    <div className="flex flex-col">
      <div className="flex align-center justify-center my-10">
        <h1 >Money Manager</h1>
      </div>
      {(userLoading || entriesLoading) && <Loading className="w-16 h-16 animate-spin mx-auto mt-12" />}
      {(!userLoading) && 
      <div className="flex flex-col justify-center items-center">
        <h2>Current Entries</h2>
        <div className="flex flex-col pt-10">
          {entries?.map(entry => (<Entry key={entry.id} entry={entry} />))}          
        </div>
        <h2>Current Tab</h2>
        <div className="flex flex-col pt-10">
          <div className="flex flex-row">
            Phil owes Milli{philToMilli()}
          </div>
          <div className="flex flex-row">
            Milli Owes Phil{milliToPhil()}
          </div>
        </div>
      </div>}
    </div>
  )
}
